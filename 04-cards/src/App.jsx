import React from 'react'
import Card from './components/Card'

const App = () => {
  const jobOpenings = [
    {
      companyName: "Google",
      logo: "https://i.pinimg.com/736x/45/20/dd/4520ddfc56208707045c56232e946f7f.jpg",
      days: "2 days ago",
      jobProfile: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$120,000",
      location: "Mumbai, India"
    },
    {
      companyName: "Amazon",
      logo:"https://i.pinimg.com/1200x/5a/62/70/5a62706bc5603694b1bd08acc40d3096.jpg",
      days: "5 days ago",
      jobProfile: "Backend Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$150,000",
      location: "Bangalore, India"
    },
    {
      companyName: "Meta",
      logo: "https://i.pinimg.com/1200x/0a/db/09/0adb09b6580d9c13a6fd4af026649940.jpg",
      days: "1 day ago",
      jobProfile: "Frontend Developer",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$90,000",
      location: "Remote"
    },
    {
      companyName: "Apple",
      logo: "https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg",
      days: "3 days ago",
      jobProfile: "iOS Developer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$140,000",
      location: "Hyderabad, India"
    },
    {
      companyName: "Netflix",
      logo: "https://i.pinimg.com/1200x/72/a0/50/72a0500ff35991d147a6b48e4bffc721.jpg",
      days: "7 days ago",
      jobProfile: "UI/UX Designer",
      tag1: "Contract",
      tag2: "Mid Level",
      pay: "$110,000",
      location: "Remote"
    },
    {
      companyName: "Microsoft",
      logo: "https://i.pinimg.com/736x/15/cf/7f/15cf7f65d56e8fcf16fa08e45ceae81d.jpg",
      days: "4 days ago",
      jobProfile: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$130,000",
      location: "Pune, India"
    },
    {
      companyName: "Adobe",
      logo: "https://i.pinimg.com/736x/4c/da/0b/4cda0b662effeca9c714884a3bc47ce1.jpg",
      days: "6 days ago",
      jobProfile: "Graphic Designer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$100,000",
      location: "Noida, India"
    },
    {
      companyName: "Tesla",
      logo: "https://i.pinimg.com/1200x/14/94/15/14941513edc990e26a1375307f0eba0b.jpg",
      days: "2 days ago",
      jobProfile: "Embedded Systems Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$160,000",
      location: "Remote"
    },
    {
      companyName: "Spotify",
      logo: "https://i.pinimg.com/736x/f5/3c/6c/f53c6ce6f793a1e5af96dddaccb5eb14.jpg",
      days: "8 days ago",
      jobProfile: "Data Analyst",
      tag1: "Part Time",
      tag2: "Junior Level",
      pay: "$85,000",
      location: "Delhi, India"
    },
    {
      companyName: "Uber",
      logo: "https://i.pinimg.com/736x/2c/ea/3e/2cea3e7494f8f6f763216b708c21f4f2.jpg",
      days: "3 days ago",
      jobProfile: "DevOps Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$125,000",
      location: "Gurgaon, India"
    }
  ];

  return (
    <div className='parent'>
      {jobOpenings.map((elem, index) => (
        <Card key={index} data={elem} />
      ))}
    </div>
  )
}

export default App