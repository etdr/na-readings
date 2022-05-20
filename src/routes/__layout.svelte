<script>
import '../app.css'

// function zoom (amount) {
//   // const h1 = document.querySelector('main h1')
//   // const h1FS = window.getComputedStyle(h1).getPropertyValue('font-size')
//   // const currentFS = parseFloat(h1FS)
//   // h1.style.fontSize = `${currentFS + amount}px`
//   // const ps = document.querySelectorAll('main p')
//   // for (let p of ps) {
//   //   const pFS = window.getComputedStyle(p).getPropertyValue('font-size')
//   //   const currentFS = parseFloat(pFS)
//   //   p.style.fontSize = `${currentFS + amount}px`
//   // }
//   const doc = document.documentElement
//   const docFS = window.getComputedStyle(doc).getPropertyValue('font-size')
//   const curr = parseFloat(docFS)
//   doc.style.fontSize = `${curr + amount}px`

// }

</script>


<div id="toparea"></div>

<nav class="list">
  <ul>
    <li><a href="/r/who-is-an-addict">Who Is an Addict?</a></li>
    <li><a href="/r/what-is-na">What Is the NA Program?</a></li>
    <li><a href="/r/why-are-we-here">Why Are We Here?</a></li>
    <li><a href="/r/we-do-recover">We Do Recover</a></li>
    <li><a href="/r/secular-preamble">Secular Preamble</a></li>
    <li><a href="/r/a-journey">A [Spiritual] Journey</a></li>
  </ul>
</nav>

<slot />

<!-- <div id="zoom">
  <button id="zoomout" on:click={() => zoom(-5)}>-</button>
  <button id="zoomin" on:click={() => zoom(5)}>+</button>
</div> -->

<footer>
  <p>All readings taken from either NA World or the secular NA community</p>
</footer>

<style>
ul {
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding-inline-start: 0;
  height: 100%;
  margin-left: 16px;
  height: 60vh;
}

li {
  display: block;
  font-family: "Merriweather", serif;
  text-align: center;
}

a {
  text-decoration: none;
  color: white;
}

button {
  color: white;
  border: none;
  margin: 0 1rem;
  padding: 0;
  background-color: black;
  font-size: 200%;
}

footer p {
  font-size: 0.8rem;
  margin-left: 2rem;
  color: white;
}
</style>