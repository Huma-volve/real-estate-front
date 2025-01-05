import emptyImage from "../../assets/client/emptyComponent.svg";

const EmptyPlaceholder = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80%] w-full py-5">
      <img src={emptyImage} alt="Empty Content" className="w-85 h-85 mb-4" />
      <p className="text-primary text-xl font-bold ">لم تقم باضافة اى عقارات بعد!</p>
    </div>
  );
};

export default EmptyPlaceholder;
