export default function Card({ receta }) {
  return (
    <>
      <h2 className="font-black">{receta.title}</h2>
      {/* <div dangerouslySetInnerHTML={{ __html: receta.instructions }}></div>{" "} */}
      <img src={receta.image} alt={receta.title} />
    </>
  );
}
