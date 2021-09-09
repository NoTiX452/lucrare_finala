import React from 'react'
import styles from '../styles/Pstyles.module.css'
import Head from 'next/head'
import Link from 'next/link'
export default function name({dog,otherDogs}) {
    return (
        <div className={styles.container}>
            <Head>
                <title>{dog.name}</title>    
            </Head>

            <div className={styles.dogWrapperLeft}>
                <img src={dog.image} alt={dog.name} className={styles.dogImage}></img>
            </div>

            <div className={styles.dogWrapperRight}>
                <div className={styles.dogInfo}>
                        <p className={styles.dogTitle}>{dog.name}</p>
                        <p className={styles.dogBreed}>{dog.breed}</p>
                        <p className={styles.dogAge}>{dog.age}</p>
                        <p className={styles.dogDesc}>{dog.desc.map(desc=>desc).join(', ')}</p>
                    </div>
                    <div className={styles.otherDogsWrapper}>
                        {otherDogs.map(otherDogs=>{
                            return(
                            <div className={styles.otherDogs} key={otherDogs.id}>
                                <Link href={"/" + otherDogs.name}><a>
                                    <img src={otherDogs.image} alt={otherDogs.name} />
                                    <p>{otherDogs.name}</p>
                                </a></Link>
                            </div>
                            )
                        })}
                    </div>    
            </div>            
        </div>
    )
}

export const getStaticPaths = async() =>{
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

    const paths = dogs.map(dog=>({
        params: {name: `${dog.name}`}
    }));
    return{
        paths,
        fallback:false,
    }
}

export const getStaticProps = async ({params}) =>{
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

    const dog = dogs.filter(dog => dog.name.includes(params.name));
    const otherDogs = dogs.filter(dog => dog.name !== params.name);

    return{
        props:{
            dog:dog[0],
            otherDogs: otherDogs.sort(()=> Math.random() - Math.random()).slice(0,3),
        }
    }
}