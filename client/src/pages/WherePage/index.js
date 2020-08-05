import React, {useState, useEffect} from "react";
import "./style.css";
import Cover from "../../components/Cover";
import image from "../../assets/images/where.jpg";
import ContentContainer from "../../components/ContentContainer";
import ZipSearchForm from "../../components/ZipSearchForm";
// import UserContext from "../../utils/userContext";
import API from "../../utils/API";
import Footer from "../../components/Footer";


function WherePage() {
    const [address, setAddress] = useState("7101%20Roosevelt%20Way%20NE%20Seattle%20WA%2098115");
    // const [results, setResults] = useState([]);

    useEffect(() => {
        // loadUser();
        whereData(address);
    });

    // function loadUser() {
    //     // Need to figure out how to get user's id 
    //     API.getUser().then(user => {
    //         let modifiedAddress = user.pollingAddress.replace(/,./g, "").replace(/ /g, "%20");
    //         setAddress(modifiedAddress);
    //     });
    // }

    function whereData(param) {
        API.getVoterInfo(param).then(res => {
            console.log(res.data);
            
        });
    }

    function handleAddressChange(event) {
        event.preventDefault();
        setAddress(event.target.value);
        // whereData(address);
    }

    return (
        <div>
            <Cover image={image} header={"WHERE"}>
                {/* Need address for this page */}
                <ZipSearchForm handleAddressChange={handleAddressChange} />
            </Cover>
            <ContentContainer>

            </ContentContainer>
            <Footer />
        </div>
    )
};

export default WherePage;