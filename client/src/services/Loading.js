import ReactLoading from 'react-loading';

const Loading = ({type, color}) => {
    return(
        <ReactLoading
            type={type}
            color={color}
            height={'3%'}
            width={'3%'}
        />
    )
}
export default Loading