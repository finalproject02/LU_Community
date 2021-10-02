import React, {useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SocialNavbar from '../../SocialNavbar/SocialNavbar';
import SearchClub from './SearchClub';
import SearchGroup from './SearchGroup';
import SearchPeople from './SearchPeople';
import SearchPost from './SearchPost';
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {searchPeople} from "../../../../actions/users";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const SearchPage = () => {
    const dispatch = useDispatch();
    const query = useQuery();
    const SearchKey = query.get('searchKey') || query.get('search');
    console.log('Search: ', SearchKey)
    useEffect(() => {
        dispatch(searchPeople(SearchKey));
    }, [SearchKey])
    const { users } = useSelector(state => state.users)

    return (
        <div>
            <SocialNavbar />
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col md="8">
                        <h3 className="mt-4">Search Results</h3>
                        <hr />
                        <SearchPeople users={users}/>
                        {/*<SearchPost />*/}
                        {/*<SearchClub />*/}
                        {/*<SearchGroup />*/}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default SearchPage;