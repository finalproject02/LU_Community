import React, {useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SocialNavbar from '../../SocialNavbar/SocialNavbar';
import SearchClub from './SearchClub';
import SearchGroup from './SearchGroup';
import SearchPeople from './SearchPeople';
import SearchPost from './SearchPost';
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {search} from "../../../../actions/auth";
import Loading from "../../../../services/Loading";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const SearchPage = () => {
    const { isAuthenticated } = useSelector(state => state.auth)
    const dispatch = useDispatch();
    const query = useQuery();
    const SearchKey = query.get('searchKey') || query.get('search');
    useEffect(() => {
        dispatch(search(SearchKey));
    }, [SearchKey])
    const { searchResult } = useSelector(state => state.users);
    const users = searchResult?.filter(result => result.type === 'user');
    const groups = searchResult?.filter(result => result.type === 'group');
    const clubs = searchResult?.filter(result => result.type === 'club');
    return (
            <div>
                <SocialNavbar />
                <Container>
                    <Row className="d-flex justify-content-center">
                        <Col md="8">
                            <h3 className="mt-4">Search Results</h3>
                            <hr />
                            {searchResult.length !== 0 ? (
                                <>
                                    <SearchPeople users={users}/>
                                    {/*<SearchPost />*/}
                                    <SearchClub clubs={clubs}/>
                                    <SearchGroup groups={groups}/>
                                </>
                            ) : (
                                <>
                                    <h6>No Result</h6>
                                    <Loading type={'spin'} color={'black'}/>

                                </>

                            )}
                        </Col>
                    </Row>
                </Container>
            </div>
    );
};

export default SearchPage;