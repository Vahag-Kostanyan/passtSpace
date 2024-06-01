const Picture = () => {

    let backgroundImageStyle = {
        backgroundImage: "url('https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg')",
    }

    return (
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat" style={backgroundImageStyle}>
            </div>
        </div>
    );
}

export default Picture;