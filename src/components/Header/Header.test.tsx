import { Header } from "./Header"
import {render, screen} from "@testing-library/react"

describe('<Header/>',() => {
    it("should render <Header/> component", () => {
       render(<Header/>)
       const page = screen.getByTestId("header")
       expect(page).toBeInTheDocument()
    })
} )