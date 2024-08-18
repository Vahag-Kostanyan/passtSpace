const EditSVG = ({height = '25' , width = '25'}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" height={height} width={width} className="text-indigo-600">
          <path fill="currentColor" d="M15.561 2.439a3.752 3.752 0 0 1 0 5.303l-.879.879-5.303-5.303.879-.879a3.752 3.752 0 0 1 5.303 0ZM9.804 4.439l5.303 5.303L5.707 19.143H.804v-4.903l9-9ZM0 17.896v1.25h1.25L0 17.896Z" />
        </svg>
    );
}

export default EditSVG;