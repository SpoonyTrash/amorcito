document.addEventListener('DOMContentLoaded', () => {
  const p1 = document.querySelector('.p1');
  const p2 = document.querySelector('.p2')
  p1.addEventListener('mouseover', () => {
    const arriba = Math.random() * (400 - 1) + 1;
    const abajo = Math.random() * (609 - 1) + 1;
    p1.style.top = `${arriba}px`;
    p1.stryle.left = `${abajo}px`;
  })

  function dijoSi(){
    document.getElementById('si').style.display = 'block'
  }

  p2.addEventListener('click', () => {
    dijoSi()
  })
})

