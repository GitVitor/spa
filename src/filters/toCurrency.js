export default (num) => {
  if (!num || !(typeof num === 'number')) num = 0

  return num.toFixed(2)
    .replace('.', ',')
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}
