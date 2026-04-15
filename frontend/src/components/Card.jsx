function Card({ children }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
      {children}
    </div>
  );
}

export default Card;