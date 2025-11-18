const ShinyText = ({ text, disabled = false, speed = 5, className = '' }) => {
  return (
    <span className={`relative inline-block ${className}`}>
      <span 
        className={`relative z-10 ${disabled ? 'text-amber-600' : 'text-transparent bg-clip-text'}`}
        style={{
          backgroundImage: 'linear-gradient(90deg, #D97706, #B45309, #D97706)',
          backgroundSize: '200% 100%',
          animation: !disabled ? `shine ${speed}s linear infinite` : 'none',
        }}
      >
        {text}
      </span>
    </span>
  );
};

export default ShinyText;

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         shine: {
//           '0%': { 'background-position': '100%' },
//           '100%': { 'background-position': '-100%' },
//         },
//       },
//       animation: {
//         shine: 'shine 5s linear infinite',
//       },
//     },
//   },
//   plugins: [],
// };
