$(document).ready(function (){
    const typeArray = ['Slayer', 'Recovery', 'Defense', 'Target']
    const monstArray= [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    var monsterTypes=[];
    const zoneLvl=[1,2,3,4,5,6,7,8,9,10];
    const upgradeArr=[1,2,3,4,5,6,7,8,9,10];
    var upgrade=Boolean;
    const planet=['Earth','Aramoor', 'Astea']
    var planetName;
    const earthTerrain=['Desert', 'Tundra', 'City', 'Wasteland', 'Ocean', 'Forest'];
    const araTerrain=['Tundra', 'Ice Plains'];
    const asteaTerrain=['Wasteland', 'Forest', 'Arctic', 'Volcanic Field'];

    function monsterGen() {
        monsterTypes.push(monstArray[Math.floor(Math.random()*monstArray.length)]);
        monsterTypes.push(monstArray[Math.floor(Math.random()*monstArray.length)]);
        console.log(monsterTypes)
    }

    function upgradeCheck(){
        var upgradeCheckNum=upgradeArr[Math.floor(Math.random()*upgradeArr.length)]
        console.log(upgradeCheckNum)
        if (upgradeCheckNum>=2){
            upgrade=false;
        }
        else {
            upgrade=true;
        }
    }
    function planetTerr() {
        planetName=planet[Math.floor(Math.random()*planet.length)];

        if (planetName=='Earth'){
            $('#terrain').text(earthTerrain[Math.floor(Math.random()*earthTerrain.length)]);
        }
        else if (planetName=='Aramoor'){
            $('#terrain').text(araTerrain[Math.floor(Math.random()*araTerrain.length)]);
        }
        else if (planetName=='Astea'){
            $('#terrain').text(asteaTerrain[Math.floor(Math.random()*asteaTerrain.length)])
        }
    }

    $('#reset').on('click', function () {
        location.reload();
    })

    monsterGen();
    upgradeCheck();
    planetTerr();

    $('#type').text(typeArray[Math.floor(Math.random()*typeArray.length)])
    $('#monsters').text(monsterTypes)
    $('#level').text(zoneLvl[Math.floor(Math.random()*zoneLvl.length)])
    $('#upgrade').text(upgrade)
    $('#planet').text(planetName)
})