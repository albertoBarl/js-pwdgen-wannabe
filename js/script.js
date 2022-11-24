// Chiedi all’utente il suo nome, poi chiedi il suo cognome, poi chiedi il suo colore preferito Infine scrivi sulla pagina nomecognomecolorepreferito21.
let my_name;
let surname;
let favourite_color;

my_name = prompt('Inserisci il tuo nome');
surname = prompt('Inserisci il tuo cognome');
favourite_color = prompt('Inserisci il tuo colore preferito');

document.getElementById("password-generated").innerHTML = (my_name + surname + favourite_color) + ('21');