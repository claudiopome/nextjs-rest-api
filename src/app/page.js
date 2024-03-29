import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.headline}>Trips API</h1>
      <p className={styles.subhead}>Documentation</p>

      <div className={styles.grid}>
        {endpoints.map((endpoint, index) => (
          <a
            href="#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              <code>
                {endpoint.name} <span>-&gt;</span>
              </code>
            </h2>
            <p>{endpoint.description}</p>
            {endpoint.parameters && (
              <>
                <br />
                <p>Parameters:</p>
                <ul>
                  {endpoint.parameters.map((parameter, parameterIndex) => (
                    <li key={parameterIndex}>
                      <b>{parameter.name}</b>: {parameter.description}
                    </li>
                  ))}
                </ul>
              </>
            )}
            {endpoint.response && (
              <>
                <br />
                <p>Example response:</p>
                <pre>
                  <code>{endpoint.response}</code>
                </pre>
              </>
            )}
          </a>
        ))}
      </div>
    </main>
  );
}
