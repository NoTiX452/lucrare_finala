import React from 'react'
import styles from './Home.module.css'
import Link from 'next/link'
import {useState} from 'react'

export default function Home() {
    const dogs=[{
        id:'1',
        name:'Jack',
        breed:'Labrador',
        age:'4 years old / 28 years old in human years',
        image:'https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
        desc:['Male','Big size','Good for outdoors','Active',]
        },

        {
        id:'2',
        name:'Ralph',
        breed:'Mastiff',
        age:'2 years old / 14 years old in human years',
        image:'https://images.unsplash.com/photo-1518378188025-22bd89516ee2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
        desc:['Male','Big size','Good for outdoors','Active',]
        },

        {
        id:'3',
        name:'Vicky',
        breed:'Corgi',
        age:'5 years old / 35 in human years',
        image:'https://images.unsplash.com/photo-1536809188428-e8ecf663d0be?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGRvZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
        desc:['Female','Small size','Good for indoors', 'Lazy',]
        },
        
        {
        id:'4',
        name:'Bee',
        breed:'Bichon',
        age:'2 years old / 14 years old in human years',
        image:'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGRvZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
        desc:['Female','Medium size','Good for indoors ', 'Active',]
        },

        {
        id:'5',
        name:'Moon',
        breed:'Chiuaua',
        age:'3 years old,35 years old in human years',
        image:'https://images.unsplash.com/photo-1546975490-e8b92a360b24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGRvZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
        desc:['Male', 'Small size','Good for indoors','Lazy',]
        },

        {
        id:'6',
        name:'Marie',
        breed:'Bulldog',
        age:'1 year old / 7 years old in human years',
        image:'https://images.unsplash.com/photo-1560574544-70d9fb52e733?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGRvZ3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60',
        desc:['Female','Small size', 'Good for indoors','Lazy',]
        },
    ]

      const[keyword,setKeyword] = useState('');

      const filteredDogs = dogs.filter(
          dog =>
          dog.breed.toLowerCase().includes(keyword) || dog.name.toLowerCase().includes(keyword)
      )

      const onInputChange = (e) => {
          e.preventDefault();
          setKeyword(e.target.value.toLowerCase());
      }

    return (
        <div>
            <div className={styles.searchWrapper}>
                <input placeholder="Search for your next friend" className={styles.searchBar} onChange={onInputChange}></input>
            </div>
            <div className={styles.dogContainer}>
                {filteredDogs < 1 ?
                (
                    <div className={styles.nopeContainer}>There are no dogs.</div>
                )
                :
                filteredDogs.map(dog=>{
                    return(
                        <div className={styles.dogItem} key={dog.id}>
                            <Link href={`/${dog.name}`}><a className={styles.dogImageBox}>
                                <img src={dog.image} alt={dog.name} className={styles.dogImage}/>
                            </a></Link>
                            <div className={styles.dogText}>
                            <p className={styles.dogHeader}>{dog.name}</p>
                            <p className={styles.dogBreed}>{dog.breed}</p>
                            <p className={styles.dogAge}>{dog.age}</p>
                            <p className={styles.dogDesc}>{dog.desc.map(desc=>desc).join(', ')}</p>
                            </div>
                        </div>
                    )
                    })
                })
            </div>
        </div>
    )
}
