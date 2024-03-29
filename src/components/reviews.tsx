export const Reviews = async () => {
    // await new Promise((resolve) => setTimeout(resolve, 2000));
    const getData = async () => {
        const response = await fetch('https://www.freetogame.com/api/games?platform=pc');
        if(!response.ok){
          throw new Error("failed to fetch API data");
        }
        return response.json();
      }
      const apiData = await getData();

    return( 
        <div className="">Reviews</div> 
    );
}