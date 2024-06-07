import abPic from '../../../../../images/avatar.jpeg'
export default function  Avatar (props){
        return (
            <div className="avatar">
                <div className="avatar-img">
                    <img src={props.image ? `/api/files/storage/${props.image}` : abPic} alt="#" />
                </div>
            </div>
        );

}
