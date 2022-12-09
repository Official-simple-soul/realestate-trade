import React from 'react';

export default function WhatIs() {
  return (
    <div className="px-12 text-justify bg-main py-8 text-white">
      <h1 className="text-3xl text-center mt-8">What is Housing</h1>
      <div className="content my-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="left">
            <h1 className="font-bold">What is it?</h1>
            <p>
              Housing, or more generally, living spaces, refers to the
              construction and assigned usage of houses or buildings
              individually or collectively, for the purpose of shelter.[1]
              Housing ensures that members of society have a place to live,
              whether it is a home or some other kind of dwelling, lodging or
              shelter.[2] Many governments have one or more housing authorities,
              sometimes also called a housing ministry or housing department
            </p>
          </div>
          <div className="right">
            <h1 className="font-bold">What is the benefit of housing</h1>
            <p>
              A good home provides protection. Children are less at risk of
              violence and sexual abuse. They are less likely to be forced into
              child labour, married off at a young age or forcibly recruited by
              armed groups. A home ensures that displaced people have better
              access to humanitarian aid
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-3xl text-center mt-8">What is Shelter</h1>
      <div className="content my-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="left">
            <h1 className="font-bold">What is it?</h1>
            <p>
              Shelter is a basic human need crucial for survival in cases of
              natural hazards or conflict. It provides security, personal safety
              and protection from the weather, and prevents ill health and
              disease. Adequate housing provides people with dignity and the
              opportunity to lead a normal life. Shelter plays an essential role
              in reducing vulnerability and building resilience. Settlements are
              not simply safe physical spaces but also socially acceptable and
              socioeconomically viable living environments.
            </p>
          </div>
          <div className="right">
            <h1 className="font-bold">Why is this so important</h1>
            <p>
              Needs for shelter and settlements are increasing. The number of
              internally displaced people across the globe reached 55 million by
              the end of 2020, with 40.5 million new displacements, the highest
              annual figure recorded in a decade. As of 31 December 2020,
              worldwide, there were more than double internally displaced people
              than refugees. Among internally displaced people, 48 million fled
              conflict and violence, and 7 million from disasters, but these
              figures could be a significant underestimate of the current
              situation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
