export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items on your packing list 💼 </em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((items) => items.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everything! You're good to go have a nice trip! ✈"
          : ` 💼 You have ${numItems} items on your list, and you already packed
          ${numPacked} (${percentage}%) `}
      </em>
    </footer>
  );
}
