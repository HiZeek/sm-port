import Container from "@/components/Container";
import Header from "@/components/Header";
import React, { Fragment } from "react";

const About = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <section id="backdrop">
          <Container className="py-20 px-5 text-white flex flex-col gap-20 justify-between">
            <div className="flex flex-col gap-10 w-[40%]">
              <div>
                <h2 className="underline text-4xl font-bold mb-3">ABOUT</h2>
                <a href="mailto:johndoe@gmail.com" className="text-lg">
                  johndoe@gmail.com
                </a>
              </div>
              <div>
                <p className="text-lg font-bold">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt. Cras dapibus. Vivamus elementum semper nisi.
                </p>
              </div>
            </div>
            <div className="text-lg relative flex flex-col items-center w-[40%]">
              <p>Kaduna</p>
              <p className="address pl-10">No. 23 Kaduna Close</p>
            </div>
          </Container>
        </section>
      </main>
    </Fragment>
  );
};

export default About;
