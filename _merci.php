    <?php

    $errors = [];

    function test_input($data): string
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    if ($_SERVER["REQUEST_METHOD"] === "POST") {
        (!isset($_POST['fname']) || trim($_POST['fname']) === '') ? $errors[] = "Prenom invalide" : $firstName = test_input($_POST['fname']);
        (!isset($_POST['lname']) || trim($_POST['lname']) === '') ? $errors[] = "Nom invalide" : $lastName = test_input($_POST['lname']);
        (!isset($_POST['mail']) || trim($_POST['mail']) === '') ? $errors[] = "mail invalide" : $mail = test_input(stripslashes($_POST['mail']));
        (!isset($_POST["message"]) || trim($_POST['message']) === '') ? $errors[] = "Message invalide" : $message = test_input($_POST["message"]);
    }
    ?>


    <?php if (empty($errors)) { ?>

        <div class="merci">
            <h3>Merci <b><?= "$firstName $lastName"; ?> </b> pour ton message !</h3>
            <p class="merci">Je te recontacterai plus vite que mon ombre à l'adresse suivante : <b> <?= $mail; ?> </b> </p>
        <?php
    } else { ?>
            <div class="erreur">
                <h3>Il va falloir recommencer !!!</h3>
                <p> Tu as fait les erreurs suivantes :</p>
                <ul>
                    <?php
                    foreach ($errors as $error) {
                        echo "<li>- " . $error . "</li>";
                    }
                    ?>
                </ul>
            <?php
        }
            ?>
            </div>