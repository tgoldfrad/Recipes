

const About = () => {

    return (
        <div style={{
            padding: '20px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            maxWidth: '570px',
            margin: '20px auto',
            textAlign: 'center',
        }}>
            <h1 style={{
                fontSize: '2em',
                marginBottom: '10px',
                color: '#ce9575',
            }}>Welcome to Recipe site!</h1>
            <p style={{
                fontSize: '1.2em',
                color: '#555',
            }}>
                At Recipe site, we believe that cooking should be fun and accessible for everyone.
                Explore our extensive collection of delicious recipes, share your own culinary creations.
                Whether you're a seasoned chef or just starting out, there's something here for everyone!
            </p>
        </div>
    );
};

export default About;