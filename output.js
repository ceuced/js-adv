export default function output(targetId) {
  const target = document.getElementById(targetId);
  return [
    (value) => {
      target.innerHTML += JSON.stringify(value) +  '<br />';
    },
    () => {
      target.innerHTML = "";
    },
  ];
}