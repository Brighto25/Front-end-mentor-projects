function DarkCard({
  image,
  title,
  name,
  highlight,
  testimonial,
  color,
  textColor,
  highlightColor,
  gridPlacement,
}) {
  const colorMap = {
    "purple-500": "bg-purple-500",
    "gray-500": "bg-gray-500",
    "dark-blue": "bg-dark-blue",
  };

  const bgColor = colorMap[color] || "bg-purple-500";

  const shouldLimitWidth = !gridPlacement?.includes("col-span-2");
  return (
    <div
      className={`${bgColor} p-9 w-full ${gridPlacement} ${shouldLimitWidth ? "max-w-92" : ""} mx-auto rounded-lg lg:mt-0 mt-6 shadow-right`}
    >
      <div></div>
      <div className="flex items-center flex-row gap-5">
        <img
          className="rounded-full w-10 ring-purple-500"
          src={image}
          alt="Profile Picture"
        />
        <div>
          <p className=" text-white">{name}</p>
          <p className={` ${textColor} text-sm`}>{title}</p>
        </div>
      </div>

      <h2 className={`text-${highlightColor} text-2xl font-bold mt-5`}>
        {highlight}
      </h2>
      <p className={` ${textColor} mt-4`}>{testimonial}</p>
    </div>
  );
}

export default DarkCard;
