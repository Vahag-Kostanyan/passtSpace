import EditSVG from "../../../svg/editSVG";

const EditButton = ({onClick}) => {
    return (
      <button onClick={onClick} className="flex flex-col justify-center items-center p-2 bg-[rgba(100,77,237,0.08)] rounded-2xl border-0 transition-all duration-200 hover:shadow-lg hover:shadow-[3.4px_2.5px_4.9px_rgba(0,0,0,0.025),8.6px_6.3px_12.4px_rgba(0,0,0,0.035),17.5px_12.8px_25.3px_rgba(0,0,0,0.045),36.1px_26.3px_52.2px_rgba(0,0,0,0.055),99px_72px_143px_rgba(0,0,0,0.08)] group">
            <EditSVG/>
      </button>
    );
  };
  
  export default EditButton;