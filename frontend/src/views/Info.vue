<template>
  <div class="container">
    <div class="title">
      <h4>Information om biljetter</h4>
      <img src="../assets/tickets.png" alt="" />
    </div>
<hr class="hrn">
    <div class="grid">
      <div class="guideDiv">
        <h5>Hur börjar jag?</h5>
        <ol class="guide">
          <li>Börja med att registera dig/logga in</li>
          <li>Leta upp en film som du vill titta på.</li>
          <li>Välj datum/tid som passar dig.</li>
          <li>Klicka på de stolar du/ni vill sitta på.</li>
          <li>Välj mellan: Vuxen/Barn/Pensionär.</li>
        </ol>
      </div>

      <div class="prices">
        <h5>Biljett priser</h5>
        <ul>
          <ol>
          <span>Vuxen:</span> 85kr
          </ol>
          <ol>
            <span>Pensionär:</span>  75kr
          </ol>
          <ol>
            <span>Barn:</span>  65kr
            <span class="barn">(under 12år)</span>
          </ol>
        </ul>
      </div>

      <div class="myPage">
        <h5>Var är biljetterna?</h5>
        <ul>
          <ol>
            Dina biljetter sparas i Mina sidor.
          </ol>
          <ol>
            För att ha tillgång till Mina sidor krävs att du är inloggad.
          </ol>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  width: 15vw;
  margin-bottom: 10px;
}

.guide {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.title {
  text-align: center;
}

li {
  font-size: 15px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

ol {
  padding-left: 31px;
  font-size: 15px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

h5 {
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin: 0;
}
.prices {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 2em;
}

.guideDiv,
.myPage,
.prices {
  background: rgba(49, 45, 45, 0.664);
  padding: 10px;
  border-radius: 10px;
}

.grid {
  margin-top: 40px;
  grid-gap: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.hrn{
  opacity: 30%;
}

span{
  font-weight: bold;
}

.barn{
  font-size: 11px;
  font-weight: normal;
}
.container{
  margin-bottom: 12.5vw; /* For the footer */
}

@media only screen and (max-width: 700px){
  .grid {
    grid-template-columns: none;
    width: 100%;
    margin: 0 auto;
  }

   ol .guide {
    width: 100%;   
    margin: 0 auto;

  }
  
  .guideDiv li {
    font-size: 0.8rem;
    width: 85%;
    margin: 0 auto;
  }

  .myPage ol {
    font-size: 0.8em;
    padding-left: 0;
  }

  ul {
    margin: 5vw;
  }

  img {
    width: 20vw;
  }

  h4 {
    font-size: 7vw;
  }

}


</style>