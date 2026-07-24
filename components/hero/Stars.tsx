const stars = Array.from({ length: 100 }, (_, index) => ({
  id: index,
  left: Math.random() * 100,
  top: Math.random() * 100,
  size: Math.random() * 3 + 1,
  opacity: Math.random() * 0.6 + 0.2,
}));

export function Stars() {
  return (
    <>
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute select-none"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            fontSize: `${star.size}px`,
            opacity: star.opacity,
            color: "white",
          }}
        >
          ✦
        </span>
      ))}
    </>
  );
}