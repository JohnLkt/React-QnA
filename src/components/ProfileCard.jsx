const ProfileCard = ({url, name, age, birthday, email}) => {
    return(
        <div className="profile">
            <img src={url}></img>
            <div className="profile-text">
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <p>Birthday: {birthday}</p>
                <p>Email: {email}</p>
            </div>
        </div>
    )
    
}

export default ProfileCard