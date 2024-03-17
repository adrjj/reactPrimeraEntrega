useEffect(()=>{

    const getItemList = async ()=>{



        const data = await getDocs(itemsCollectionRef);

        console.log(data);



        const filteredData = data.docs.map( (doc)=>({

            ...doc.data(),

            id:doc.id

        }))

       

        console.log(filteredData);

        //console.log(filteredData)

        

    }



    getItemList();

}, [])