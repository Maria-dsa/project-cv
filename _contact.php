<section id="contact">
  <div class="headerContact">
    <h2>Telegramme</h2>
    <img src="./pictures/trainvapeur.png" alt="Un joli train qui fume">
  </div>


  <form action="./index.php#footer" method="post">
    <div class="coordonnees">
      <label for="name">Prénom :</label>
      <input type="text" id="fname" name="fname" placeholder="Joe" aria-label="nom" required>
      <label for="name">Nom :</label>
      <input type="text" id="lname" name="lname" placeholder="Dalton" aria-label="prenom" required>
      <label for="mail">e-mail&nbsp;:</label>
      <input type="email" id="mail" name="mail" placeholder="joe-dalton@jail.com" aria-label="mail" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}$">
    </div>
    <div class="message">
      <label for="msg">Message :</label>
      <textarea id="msg" name="message" maxlength=2000 placeholder="Echappé. STOP. Vais braquer une banque. STOP." aria-label="message" required></textarea>
      <button type="submit">Envoie ton telegramme !</button>
    </div>
  </form>


  <?php
  if (!empty($_POST)) :
    include("_merci.php");
  endif;
  ?>
</section>