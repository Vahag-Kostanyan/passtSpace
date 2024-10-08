import GitHubSVG from '../svg/gitHubSVG';

const ContinueWithGitHub = ({action, text = 'Continue with GitHub'}) => {
    return (
        <button
            onClick={action}
            className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
            <div className="bg-white p-2 rounded-full">
                <GitHubSVG/>
            </div>
            <span className="ml-4">
                {text}
            </span>
        </button>
    );
}

export default ContinueWithGitHub;