import Image from "next/image";
import styles from "styles/Home.module.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "components/Accordion";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { Box } from "components/Box";
import { Checkbox, CheckboxItem } from "components/Checkbox";
import { Carousel, CarouselItem } from "components/Carousel";
import { Codeblock } from "components/Codeblock/Codeblock";
import { python_text } from "components/Codeblock/demos/python";
import { javascript_text } from "components/Codeblock/demos/javascript";
import { php_text } from "components/Codeblock/demos/php";
import Home from "pages";

const Story = () => {

  const content = {
    javascript: {
        name: "Java",
        content: javascript_text,
    },
    python: {
        name:"Python",
        content:python_text,
        },
    php: {
        name:"PHP",
        content:php_text,
    }
}

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
        <div style={{ maxWidth: "600px", width: "100%" }}>
          <Accordion type="multiple" collapsible="true">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARAI design pattern.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Is it unstyled?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s unstyled by default, giving you freedom over the
                look and feel.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Can it be animated?</AccordionTrigger>
              <AccordionContent>
                Yes! You can animate the Accordion with CSS or JavaScript.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Text type="heading1" as="h1">
            This is a responsive H1
          </Text>
          <Text type="heading2" as="h2">
            This is a responsive H2
          </Text>
          <Text type="heading3" as="h3" color="textLight">
            This is a responsive H3
          </Text>
          <Text>This is a default text component</Text>
          <div style={{ margin: "20px 0" }}>
            <Button>Button</Button>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <Button variant="secondary">Button</Button>
          </div>
          <div style={{ marginBottom: "20px" }}>
            <Button variant="outlined">Button</Button>
          </div>
          <Box jc="sb" ai="center" style={{ marginBottom: "20px" }}>
            Row
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
          </Box>
          <Box col jc="center" ai="center">
            Column
            <Button>Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
          </Box>
          <div>
            <Carousel title="Carousel Component">
              <CarouselItem>Item 1</CarouselItem>
              <CarouselItem>Item 2</CarouselItem>
            </Carousel>
          </div>
        </div>
        <div style={{ maxWidth: "690px" }}>
          <Checkbox>
            <CheckboxItem>
              Register your app with Deriv, and add a percentage markup to the
              contract prices to profit from every contract payout.
            </CheckboxItem>
            <CheckboxItem>
              Register your app with Deriv, and add a percentage markup to the
              contract prices to profit from every contract payout.
            </CheckboxItem>
            <CheckboxItem>
              Register your app with Deriv, and add a percentage markup to the
              contract prices to profit from every contract payout.
            </CheckboxItem>
          </Checkbox>
        </div>
        <div style={{ maxWidth: "888px" }}>
          <Codeblock contents={content}/>
        </div>
        
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  );
};

export default Story;
