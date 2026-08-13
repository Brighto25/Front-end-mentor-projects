function LightCard({ image, title, name, highlight, testimonial,  }) {
  return (
    <div className={`bg-color-white p-9 w-full max-w-92 mx-auto rounded-lg mt-6 shadow-right`}>
      <div></div>
      <div className="flex items-center flex-row gap-5">
        <img className="rounded-full w-10" src={image} alt="Profile Picture" />
        <div>
          <p className=" text-gray-400">{name}</p>
          <p className={` text-gray-400 text-sm`}>{title}</p>
        </div>
      </div>

      <h2 className="text-gray-500 text-2xl font-bold mt-5">{highlight}</h2>
      <p className={` text-gray-400 mt-4`}>{testimonial}</p>
    </div>
  );
}

export default LightCard;
