import axios from "axios";
import { useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import SearchBar from '../components/common/SearchBar';
import PortfolioCard from "../components/PortfolioCard";


    

const About = () => {
    const [personal, setPersonal] = useState([]);
    const [portfolio, setPortfolio] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");


    useEffect(() => {
      axios.get("http://localhost:4000/personal").then((res) => {
        setPersonal(res.data);
      });
      axios.get("http://localhost:4000/portfolio").then((res) => {
          setPortfolio(res.data);
      })
    }, []);

    const renderPersonalCard = () => {
        let personalData = personal
        return personalData.map(({url, name, age, birthday, email, id}) => {
            return <ProfileCard url={url} name={name} age={age} birthday={birthday} email={email} key={id} />
        })
    }

    const renderPortfolio = () => {
        let portfolioList = portfolio
        console.log(portfolio)
        if (searchQuery) {
            portfolioList = portfolioList.filter(({achivement}) => 
            achivement.toLowerCase().includes(searchQuery.toLowerCase())
            )
          }
          return portfolioList.map(({achivement, detail, id}) => {
            return <PortfolioCard achivement={achivement} detail={detail} key={id} />
          })
    }
  
    return(

        <>
            <h1>About Me</h1>
            <div>
                {renderPersonalCard()}
                <hr></hr>
            </div>
            <h1>Portfolio</h1>
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <div>
                {renderPortfolio()}
            </div>
        </>

    )

}

export default About