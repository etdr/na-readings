<script>
  import '../app.css'
</script>

<div id="toparea"></div>

<nav class="list">
  <ul>
    <li><a href="/r/who-is-an-addict">Who Is an Addict?</a></li>
    <li><a href="/r/what-is-na">What Is the NA Program?</a></li>
    <li><a href="/r/why-are-we-here">Why Are We Here?</a></li>
    <li><a href="/r/we-do-recover">We Do Recover</a></li>
    <li><a href="/r/secular-preamble">Secular Preamble</a></li>
    <li><a href="/r/a-journey">A Journey</a></li>
  </ul>
</nav>

<slot />

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

footer p {
  font-size: 0.8rem;
  margin-left: 2rem;
  color: white;
}
</style>