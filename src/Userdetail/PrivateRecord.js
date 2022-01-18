

const newsnap = async(userName,db)=>{
    const userRef = collection(db, "users");
    const querieddata = query(userRef, where("username", "==", userName),orderBy('Timestamp','desc')  );
    const querySnapshot = await getDocs(querieddata); 
    let mainarr =[];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      let j = doc.id;
      let b = doc.data();
      let newobj = {}
      newobj[j] = b;
      mainarr.push(newobj)
      scores = mainarr.map((arr)=>arr[Object.keys(arr)[0]]['word'])
      score = scores.sort(change) 
      // number that tells where to stop from highest to lowest score

      if (score.length < 20){
          setScorethreshold(score[score.length-1])
      }
      else{
          setScorethreshold(score[20-1])
      }
      
    });

    if(mainarr.length<=20){
      setPersonalArr(mainarr)
      setpArraylength(mainarr.length)
    }

    else{
      let newArr = mainarr.slice(0,20)
      setPersonalArr(newArr)
      setpArraylength(mainarr.length)
    }
    console.log(mainarr)
    console.log(score)
  }


  const BestScores = async(userName,scorethreshold,setBestScoreArray)=>{
    const userRef = collection(db, "users");
    const q2 = query(userRef,where("username", "==", userName), where("word", ">",scorethreshold));
    const querySnapshot = await getDocs(q2);
    let scoresArray =[];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      let j = doc.id;
      let b = doc.data();
      let newobj = {}
      newobj[j] = b;
      scoresArray.unshift(newobj)
   
  });
     setBestScoreArray(scoresArray)
}