export default function Arrow({ active }) {
  return (
    <>
      <div className={`light-beam ${active ? "beam-active" : ""}`} />
      <div className={`arrow ${active ? "shoot" : ""}`} />
    </>
  );
}
