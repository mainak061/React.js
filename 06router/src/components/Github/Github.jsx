import { useLoaderData } from "react-router"

function Github() {
  const data=useLoaderData()
    // const [data,setData]=useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/mainak061')
    //     .then(response=>response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])

  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>Name: {data.name} <br /> Github Bio: {data.bio}
    <img className="mt-8 rounded-full block mx-auto" src={data.avatar_url} alt="Git picture" width={300}/>
    <a href="https://github.com/mainak061" target="_blank"><button ><img className=" object-cover w-20 h-20 mx-auto my-8 rounded-full hover:border hover:shadow-3xl" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMQAAACUCAMAAAD79nauAAAAeFBMVEUbHyP///8AAAAYHCD8/Pz4+PgJEBYVGh4TGBze3t7v7+/Z2dkNExjj4+P09PQAAAoABw+pqanNzc57fH1QUlTHyMhiY2U7OzuysrMhJCe/v79GSEqdnZ4AAAUxMTM+QEKPj49xc3RZWVqFhYYpKSlqa2wpKy8LDQ5r0lXkAAAIzUlEQVR4nO1d65aivBLVREKAoOEid0Swtd//DQ/q9IxCCtQU2N867p8zLsImqdtOJb1YfPDBBx/8H4GanAsm/4ExwblJ3/1ej4JyJkW6q/IwCgrPS1p4XnGIwrzapUIy/uuZmJLwqgn2iW8byw4M20/2QVNxIs13vycMKkkate/vdl//Fm7LJEqJ/J3zwQmJPN9dDTG4YuX6XkQIf/cb9yDJybPscQI/sC3vROS73/oW5oaE2fpxBlcYfkg2v8U6uPyqB80Ahlt/yd+wqjiJa+s1CmdYdfx246DlKfBfp3CGH5zKt7oqXh6zXjx4FkZ2LN84GcRMnnBIMOzEJG+iQEn4tEeCsA7JO5YUZSTBonBGQtjsNEzeaPgkFayGzxw0uHlAsYZb2AdzVvsWwtN2Sn0YnhDzcZClZmyA4JezpVNl6kzDYbl00nIeDqRCNulbWNUsEeO7eTHbewxu8z0Hh8nW0hXW9CxkPjGH1i7yia1bTGfTNyzSST0tJTNwaFlMmkiRbA4Oy2U2oYsixTwclstiMhZlgJ4vQVgHm2k4yLAf5Ax/6zuPaE0gbMffbvsfxwoncVF8pzAI58tMq2ifvBjD3aw45iklXv8zZLspUlqx74+0KohpCknMMHjB5J19kxIpTCrzfom42k/gZ0WsSL7XIbv8JxXyK3+ShhXFjP0pg4gikzFifBZElX3b/5xIW65WTyTo9vGb/SvkiKf4iY/uoUitepXkbhxGjs7PkjPWtu06fuYVLbxk61iubRs//2sX5V08k6Hq6TUyC86VldyhMwxJPfcsFvvZvq4EucPm1By8reMaSyMLyX05TYlytiiubSvne7lsun6Qkyjx6ur8zqJT9lMu238+ta5s35fDidJLe6hTIUN1mGN9fUKe3x9+0oVJPzMiSh9towYLKGdC+1JKt4GbQ8kIKObwSGyVz3cjtKmgG0jrm3omlskGKykHJwKRBFCnoE0FZWAGfsIKqqqQfUEhcKZCwGV1hJUwK+PEGU6O851YDY2AVrvwBThEzTAGoAs4s3OQSKiTmguyBcZ6MmNwgOU6xUkMIOd0Rowh+JeHARI1ilFQ0K5bHDDUWXVGcAWWTWwaeKfAQhjDpDAHH00fInt4FKq/nkgAPt1FrL1KeAMw0J8KIKu5PB0xxxQ5aBZbbRKUgKt1e8LcKJTggjK0F60MIVHJOKLqWyKGpnylXVXAymV2Qi4eFZLQFdo+EJSQV3vkMh5O0bRLIzBKODlKUnM7FOSgLE2j4DvIaeCr7+QAtIq4Oz1XvjkCQriBL76LCvhgtqYLAb+O3VNr9AGVd+uuvPXscxV69QVWV1ZCAOREVpr6E2hsWJXE3WCQk000SUARSD8XUAwWACT0BqMlRGKKrcHNESKh1elomlDJpTnDSsgQyNP8VMcAeQxF0SlIsBwg4cQ6GQ6cCkxCApoJPd2GKTZMr5jCJiRUpFqhToozL4kSMuypSMzqYqciMUmwO0xCAjZsDCGlC2BPTdew+Q6KEy6S9ncLsADTc7FwsLPx9nD+Amym8k2dYEfB3Ek3PVaAp1ABttUr7eAuLdzt2TNkBHUiafpzuDM/Q29xI3tI4tJNxQtIR8HawrkZCxRWNEthEkDnPNCNQlSQXa811Vh4nS495JOX8PfS9YT8BOq8jlYY7YEy0PxcXa1xoBH2gEqCwSdjtFOcgU7Y7Q5R8KAC3mbRlzFBmXe5PCJOBYeUMwzVl1UwCRfRP23giVhV2s6cDDT04kmZrIJHsfVHGWwPz7E6Cr4H9oARishNNEDCxTnqwEuokjgDoYGElgPPX/oYLPhwIz3GGeGhloXWz1baLLgshg7tobTHynqIxNKPNWdbfINJ5gU1xoo14+GmfLvb5PoUqPwabs9eo4RUag5Z3RnF7tWLBqhcRCPHoT2cu2PYkH+6wKnj8oWAZJJFNHocOsJJC3h8Z9qG4/tOxxJX20NFnmycZCStxw/W+1pCx+1wtymBXYdVFQZeZ3jDSSL58K0otP1pWPgPnO7ZY+VnLLzJx11ZcsE2ZtPTQWwnCUxCxq6pEWX7m8Z77BAPYtFyJ80l5PxcylSecbV2syBXdoNfsSHkVHuOYTx4DAlRU2H5bcHi59c+d3IAY1SRqllwsARVw8JsW7hXSe3Ddf8XzBYyqAWAiuHA1gWquCU63RHedb1AberwRr34gnvAFA/S7IfooNujd60k1J0fgzJRCfVZqIDcyNNt+jSuUhBTbYu4gx3kw/nkHXS7a3roHl2y4ouPooqIO1zEgNtBfeAfeuyqslctVqS99G013BMz0FTYwQQbtGZn/dvBpXOY9VisRxbBo+vJxVSEfsCO959we81qWNnJQMakrgfPQxuYgtBfmOl9Sr4KrqOYpM7+0lhZyXGkt3ugW/gWnlYrBAjROZaZ/cx3mR73ydb3t0kRhGKs0FOfbuzC1xeb1Ng09wvnb3JmSpnu4nh3EnL8fiOxe4CD3Ux0qLznHm996flGz8e2B/lpnMMKoT8cRMcoj68M9QiJ6a4oOKMTLV65eOYBElNeFrHo7Qm70fOX+I2T0NzxfeQV7ljY+/RZwWaUxBY3d1WB3XfXG/6hrZd/TvRRIclYjBrzTn41RZTrgHX6PQw7C3Y/J8dPYdGMvMMICWc3A4f2LVS1kLF23fXFAY9tDQ+T8EdnEgl8cM9izMUPksjmu+2TkgQu+DVmwkh0ZN2nQQ7g1s7rJNz9vHdLUhZBG9yjJKDtOef4PfPFkpTtAC14jAS0x5jF81+O2Zr3EZPEgcx4G+MNCPEV9fIrJFYOedeFse1kHKyedjEmFrG8x6G16Dde3UtJXHTd1NMkbC9/y423/yA2UbHWIbHyjmymIA2DSt7cHTwaJXFXY2fR4ldcu08Zz29ojMaJm+sCkpC+wa8CEKQN4X94jK7vP7Luyi4oQbqVAwkmIU3m2rY73okhKqv93bb+jX/3YCHJomnKB6QWJpvoRGa63fZpmA/ITmdQ9iv+TMAHH3zwwQcf/HfwP8GFgtjxV1FpAAAAAElFTkSuQmCC" alt="Github Logo" /></button></a>
    </div>
  )
}

export default Github

