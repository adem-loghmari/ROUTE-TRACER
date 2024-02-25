import React, { Component } from "react";
import MultilevelSidebar from "react-multilevel-sidebar";
import "react-multilevel-sidebar/src/Sidebar.css";


let options = [
  {
    title: "Technology",
    titleIcon: <i className="fa fa-solid fa-microchip"></i>,
    content: [
      { id: 1, name: "Web Development", to: "/web-development" },
      { id: 2, name: "Mobile Development", to: "/mobile-development"},
      { id: 3, name: "Artificial intelligence & Machine Learning", to: "/artificial-intelligence-machine-learning" }, 
      { id: 4, name: "Data Science ", to: "/data-science" },
      { id: 5, name: "Cloud Computing", to: "/cloud-computing" }, 
      { id: 6, name: "Game Development", to: "/game-development" },
      { id: 7, name: "Design", to: "/design" },
      { id: 8, name: "3D Printing", to: "/3d-printing" }, 
      { id: 9, name: "Blockchain", to: "/blockchain" }, 
      { id: 10, name: "Internet of Things (IoT)", to: "/internet-of-things" },
      { id: 11, name: "Hardware Electronics", to: "/hardware-electronics" },
    ]
  },
  {
    title: "Physics",
    titleIcon: <i className="fa fa-solid fa-atom"></i>,
    content: [
      { id: 12, name: "Classical Mechanics", to: "/classical-mechanics" },
      { id: 13, name: "Thermodynamics", to: "/thermodynamics" },
      { id: 14, name: "Electrommagnetism", to: "/electrommagnetism" },
      { id: 15, name: "Optics", to: "/optics" },
      { id: 16, name: "Relativity", to: "/relativity" },
      { id: 17, name: "Quantum mechanics", to: "/quantum-mechanics" },
      { id: 18, name: "Fluid mechanics", to: "/fluid-mechanics" },
      { id: 19, name: "Astrophysics", to: "/astrophysics" },
      { id: 20, name: "Nuclear Physics", to: "/nuclear-physics" },
    ]
  },
  {
    title: "Math",
    titleIcon: <i className="fa fa-solid fa-calculator"></i>,
    content: [
      { id: 21, name: "Arithmethic", to: "/arithmetic" },
      { id: 22, name: "Algbera", to: "/algebra" },
      { id: 23, name: "Geometry", to: "/geometry" },
      { id: 24, name: "Trigonometry", to: "/trigonometry" },
      { id: 25, name: "Calculus", to: "/calculus" },
      { id: 26, name: "Statistics", to: "/statistics" },
      { id: 27, name: "Discrete Mathematics", to: "/discrete-mathematics" },
      { id: 28, name: "Number Theory", to: "/number-theory" },
      { id: 29, name: "Abstract Algebra", to: "/abstract-algebra" },
      { id: 30, name: "Topology", to: "/topology" },
      { id: 31, name: "Logic", to: "/logic" },  
      { id: 32, name: "Set Theory", to: "/set-theory" },


    ]
  },
  {
    title: "Wellbeing",
    titleIcon: <i className="fa fa-solid fa-spa"></i>,
    content: [
      { id: 33, name: "Physical Health", to: "/physical-health" },
      { id: 34, name: "Mental Health", to: "/mental-health" },
      { id: 35, name: "Personal Development", to: "/personal-development" },
      { id: 36, name: "Relationships", to: "/relationships" },
      { id: 37, name: "Financial Wellness", to: "/financial-wellness" },
      { id: 38, name: "Healthy Habits", to: "/healthy-habits" },
      { id: 39, name: "Cooking & Baking", to: "/cooking-baking" }, 
    ]
  },
 
  {
    title: "Science",
    titleIcon: <i className="fa fa-microscope"></i>,
    content: [
      { id: 40, name: "Geology", to: "/geology" },
      { id: 41, name: "Biology", to: "/biology" },
      { id: 42, name: "Biomedical", to: "/biomedical" },
      { id: 43, name: "Meterology", to: "/meterology" },
      { id: 44, name: "Oceanography", to: "/oceanography" },
    ]
  },
  {
    title: "Chemistry",
    titleIcon: <i className="fa fa-solid fa-vial"></i>,
    content: [
      { id: 45, name: "Organic Chemistry", to: "/organic-chemistry" },
      { id: 46, name: "Inorganic Chemistry", to: "/inorganic-chemistry" },
      { id: 47, name: "Analytical Chemistry", to: "/analytical-chemistry" },
      { id: 48, name: "Physical Chemistry", to: "/physical-chemistry" },
      { id: 49, name: "Biochemistry", to: "/biochemistry" },
    ]
  },
  {
    title: "Engineering",
    titleIcon: <i className="fa fa-graduation-cap"></i>,
    content: [
      { id: 50, name: "Civil Engineering", to: "/civil-engineering" },
      { id: 51, name: "Mechanical Engineering", to: "/mechanical-engineering" },
      { id: 52, name: "Electrical Engineering", to: "/electrical-engineering" },
      { id: 53, name: "Chemical Engineering", to: "/Chemical-engineering" },
      { id: 54, name: "Aerospace Engineering", to: "/aerospace-engineering" },
      { id: 55, name: "Nuclear Engineering", to: "/nuclear-engineering" },
    ]
  },
  {
    title: "Music",
    titleIcon: <i className="fa fa-solid fa-music"></i>,
    content: [
      { id: 56, name: "Guitar", to: "/guitar" },
      { id: 57, name: "Bass Guitar", to: "/bass-guitar" },
      { id: 58, name: "Piano", to: "/piano" },
      { id: 59, name: "Violin", to: "/violin" },
      { id: 60, name: "Drums", to: "/drums" },
    ]
  },
  {
    title: "Languages",
    titleIcon: <i className="fa fa-solid fa-globe"></i>,
    content: [
      { id: 61, name: "English", to: "/english" },
      { id: 62, name: "French", to: "/french" },
      { id: 63, name: "Spanish", to: "/spanish" },
      { id: 64, name: "German", to: "/german" },
      { id: 65, name: "Chineese", to: "/chineese"},
      { id: 66, name: "Arabic", to: "/arabic" },
      { id: 67, name: "Indian", to: "/indian" },
    ]
  },
  {
    title: "Board Games",
    titleIcon: <i className="fa fa-solid fa-chess-knight"></i>,
    content: [
      { id: 69, name: "Chess", to: "/chess" },
      { id: 68, name: "Scrabble", to: "/scrabble" },
      { id: 70, name: "Dungeons and dragons", to: "/dungeons-and-dragons" },
    ]
  },
  {
    title: "Video Games",
    titleIcon: <i className="fa fa-solid fa-gamepad"></i>,
    content: [
      { id: 71, name: "League of Legends", to: "/League-of-Legends" },
      { id: 72, name: "Overwatch ", to: "/overwatch" },
      { id: 73, name: "World of warcraft", to: "/world-of-warcraft" },

    ]
  },
];

export class SideBar extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }

  //   you can also use this function on any of your event to open/close the sidebar
  handleSidebarToggle = isOpen => {
    this.setState({ isOpen });
  };

  handleClick = itemOptions => {
    /* 
        do something with the item you clicked.
        you can also send custom properties of your choice
        in the options array you'll be getting those here
        whenever you click that item
    */
  };

  render() {
    return (
      <div>
        <MultilevelSidebar
          open={this.state.isOpen}
          onToggle={this.handleSidebarToggle}
          options={options}
          header="Categories"
          onItemClick={this.handleClick}
        />
        {/* using in our button to open the sidebar */}
        <button className="btn" id="hamburger-menu" onClick={() => this.handleSidebarToggle(true)}><i className="fa fa-solid fa-angle-right"></i></button>
      </div>
    );
  }
}