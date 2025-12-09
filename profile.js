let profContainer = document.getElementById('profContainer');
let localUsersInfo = JSON.parse(localStorage.getItem('localUsers'));

function profileLoader() {

    profContainer.innerHTML = `
        <img id="charImg" src="Images/profileImg.png" alt="">
        <img class="infoScreen" src="Images/InfoScreen.png" alt="">
        <div class="charText">
            <div class="infoLine">
                <label class="infoTitle" >Name</label>
                <p id="infoName">${localUsersInfo[0].profName}</p>
            </div>
            <div class="infoLine">
                <label class="infoTitle" >age</label>
                <p id="infoAge">${localUsersInfo[0].profAge}</p>
            </div>
            <div class="infoLine">
                <label class="infoTitle" >Backstory</label>
                <p id="infoBio">${localUsersInfo[0].profBio}</p>
            </div>
            <div class="infoLine">
                <label class="infoTitle" >Affiliations</label>
                <p class="cInfoContent"> <ul class="affs">
                    <li id="aff1">${localUsersInfo[0].aff1}</li>
                    <li id="aff2">${localUsersInfo[0].aff2}</li>
                    <li id="aff3">${localUsersInfo[0].aff3}</li>
                </ul></p>
            </div>
        </div>
    `
}

profileLoader();