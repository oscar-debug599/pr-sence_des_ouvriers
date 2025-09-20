const faceio = new faceIO("fioa8fe1");

function enregistrerVisage() {
  faceio.enroll({
    locale: "fr",
    payload: {
      role: "ouvrier"
    }
  })
  .then(userInfo => {
    document.getElementById("status").innerText = `✅ Ouvrier enregistré : ID = ${userInfo.facialId}`;
  })
  .catch(err => {
    document.getElementById("status").innerText = `❌ Échec de l'enregistrement : ${err.message}`;
  });
}

function verifierVisage() {
  faceio.authenticate({
    locale: "fr"
  })
  .then(userInfo => {
    document.getElementById("status").innerText = `✅ Présence confirmée pour ID = ${userInfo.facialId}`;
  })
  .catch(err => {
    document.getElementById("status").innerText = `❌ Échec de la vérification : ${err.message}`;
  });
}
