export default function Angel({ onShoot }) {
  return (
    <div className="angel-container" onClick={onShoot}>
      <img 
        src="/images/angel2.png" 
        alt="Anjo Arqueiro"
        className="angel-image"
      />
    </div>
  );
}
