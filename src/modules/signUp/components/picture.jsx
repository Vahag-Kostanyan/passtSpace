const Picture = () => {

    let backgroundImageStyle = {
        backgroundImage: "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')",
    }

    return (
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat" style={backgroundImageStyle}>
            </div>
        </div>
    );
}

export default Picture;