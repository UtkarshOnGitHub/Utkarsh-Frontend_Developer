import {render , cleanup,screen, getByTestId} from "@testing-library/react"
import { Footer } from "../components/Footer";
import Pagination from "../components/Pagination";
import Banner from "../sections/Banner"
import Form from "../sections/Form";
import ShowData from "../sections/Showdata";

it("Should Render Banner Component",()=>{
    render(<Banner/>);
    const testElement = screen.getByTestId("banner-section")
    expect(testElement).toBeInTheDocument()
    expect(testElement).toHaveTextContent("Let's Explore Space With Antrikash.")
})  

it("Should Render Form Component",()=>{
    render(<Form/>);
    const testElement = screen.getByTestId("form-section")
    expect(testElement).toBeInTheDocument()
})  
it("Should Redner ShowData Component" , ()=>{
    render(<ShowData/>)
    const testElement = screen.getByTestId("showData-section")
    expect(testElement).toBeInTheDocument()
})

it("Should Worked Pagination" , ()=>{
    render(<Pagination/>)
    const testElement = screen.getByTestId("pagi-btn")
    expect(testElement).toBeInTheDocument()
})
it("Should Have A Footer" , ()=>{
    render(<Footer/>)
    const testElement = screen.getByTestId("footer-test")
    expect(testElement).toBeInTheDocument()
})
