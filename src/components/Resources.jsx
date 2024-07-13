import React from 'react';
import Card1 from './ResourceCard'; // Adjust the import path based on your file structure

const resourceData = [
  {
    id: 'anxiety',
    title: 'Anxiety',
    description: 'Anxiety disorders involve excessive fear or anxiety that is difficult to control and affects daily life.',
    types: 'Generalized Anxiety Disorder (GAD), Panic Disorder, Social Anxiety Disorder, Specific Phobias.',
    symptoms: 'Restlessness, fatigue, difficulty concentrating, irritability, muscle tension, sleep disturbances.',
    treatment: 'Cognitive-behavioral therapy (CBT), medication (SSRIs, benzodiazepines), mindfulness, lifestyle changes.',
    imageUrl: '/download (1).jpeg'
  },
  {
    id: 'depression',
    title: 'Depression',
    description: 'Depression is a mood disorder characterized by persistent feelings of sadness and loss of interest.',
    types: 'Major Depressive Disorder, Persistent Depressive Disorder (Dysthymia), Bipolar Disorder.',
    symptoms: 'Feelings of sadness, hopelessness, fatigue, changes in appetite and sleep patterns, loss of interest in activities, difficulty concentrating.',
    treatment: 'Psychotherapy, medication (antidepressants), lifestyle changes, electroconvulsive therapy (ECT).',
     imageUrl: '/download (2).jpeg'
  },
  {
    id: 'bipolar',
    title: 'Bipolar Disorder',
    description: 'Bipolar disorder is characterized by extreme mood swings that include emotional highs (mania or hypomania) and lows (depression).',
    types: 'Bipolar I Disorder, Bipolar II Disorder, Cyclothymic Disorder.',
    symptoms: 'Mood swings, high energy levels, reduced need for sleep, unusual talkativeness, racing thoughts (mania); fatigue, sadness, hopelessness (depression).',
    treatment: 'Medication (mood stabilizers, antipsychotics), psychotherapy, lifestyle changes, education and support.',
     imageUrl: '/download (3).jpeg'
  },
  {
    id: 'schizophrenia',
    title: 'Schizophrenia',
    description: 'Schizophrenia is a serious mental disorder in which people interpret reality abnormally.',
    types: 'Paranoid Schizophrenia, Catatonic Schizophrenia, Disorganized Schizophrenia, Undifferentiated Schizophrenia.',
    symptoms: 'Delusions, hallucinations, disorganized thinking, abnormal motor behavior, negative symptoms (reduced ability to function normally).',
    treatment: 'Antipsychotic medications, psychotherapy, social skills training, family therapy.',
   imageUrl: '/download (4).jpeg'
  },
  {
    id: 'ptsd',
    title: 'Post-Traumatic Stress Disorder (PTSD)',
    description: 'PTSD is a disorder that develops in some people who have experienced a shocking, scary, or dangerous event.',
    types: 'Acute Stress Disorder, Complex PTSD.',
    symptoms: 'Flashbacks, nightmares, severe anxiety, uncontrollable thoughts about the event, avoidance of reminders.',
    treatment: 'Cognitive-behavioral therapy (CBT), medication (antidepressants), eye movement desensitization and reprocessing (EMDR), lifestyle changes.',
     imageUrl: 'download (5).jpeg'
  },
  {
    id: 'ocd',
    title: 'Obsessive-Compulsive Disorder (OCD)',
    description: 'OCD is a disorder where people have recurring, unwanted thoughts, ideas or sensations (obsessions) that make them feel driven to do something repetitively (compulsions).',
    types: 'Contamination, symmetry and ordering, intrusive thoughts, hoarding.',
    symptoms: 'Compulsive behavior, excessive cleaning, repeated checking, hoarding, intrusive thoughts.',
    treatment: 'Cognitive-behavioral therapy (CBT), medication (SSRIs), exposure and response prevention (ERP), lifestyle changes.',
     imageUrl: 'download (6).jpeg'
  },
  {
    id: 'eating-disorders',
    title: 'Eating Disorders',
    description: 'Eating disorders are serious conditions related to persistent eating behaviors that negatively impact health, emotions, and ability to function in important areas of life.',
    types: 'Anorexia Nervosa, Bulimia Nervosa, Binge-Eating Disorder.',
    symptoms: 'Extreme food restriction, binge eating, purging behaviors, excessive exercise, distorted body image.',
    treatment: 'Psychotherapy, nutritional counseling, medication, medical monitoring, support groups.',
     imageUrl: '/download (7).jpeg'
  },
  {
    id: 'adhd',
    title: 'Attention-Deficit/Hyperactivity Disorder (ADHD)',
    description: 'ADHD is a neurodevelopmental disorder characterized by inattention, hyperactivity, and impulsivity.',
    types: 'Inattentive Type, Hyperactive-Impulsive Type, Combined Type.',
    symptoms: 'Difficulty sustaining attention, forgetfulness, fidgeting, excessive talking, interrupting others.',
    treatment: 'Behavioral therapy, medication (stimulants, non-stimulants), lifestyle changes, educational support.',
     imageUrl: '/download (8).jpeg'
  },
  {
    id: 'stress',
    title: 'Stress',
    description: 'Stress is a feeling of emotional or physical tension in response to being overwhelmed or unable to cope with mental or emotional pressure.',
    types: 'Acute Stress, Episodic Acute Stress, Chronic Stress.',
    symptoms: 'Headaches, muscle tension, fatigue, sleep disturbances, anxiety, irritability.',
    treatment: 'Stress management techniques, relaxation exercises, therapy, lifestyle changes.',
    imageUrl: '/download (9).jpeg'
  },
  {
    id: 'addiction',
    title: 'Addiction',
    description: 'Addiction is a chronic disorder characterized by compulsive drug seeking, continued use despite harmful consequences, and long-lasting changes in the brain.',
    types: 'Substance Use Disorders, Behavioral Addictions.',
    symptoms: 'Craving, loss of control, tolerance, withdrawal symptoms, neglect of responsibilities.',
    treatment: 'Behavioral therapy, medication, support groups, rehabilitation programs.',
    imageUrl: '/download (10).jpeg'
  },
  {
    id: 'personality-disorder',
    title: 'Personality Disorders',
    description: 'Personality disorders are a group of mental disorders characterized by unhealthy patterns of thinking, functioning, and behaving.',
    types: 'Borderline Personality Disorder, Antisocial Personality Disorder, Narcissistic Personality Disorder, Avoidant Personality Disorder.',
    symptoms: 'Difficulty perceiving and relating to situations and people, distorted self-image, extreme emotional responses, impulsivity.',
    treatment: 'Psychotherapy, medication, hospitalization in severe cases, support groups.',
    imageUrl: '/download (11).jpeg'
  }
];

const Resources = () => {
  return (
    <div className="resources">
      <h1>Mental Health Resources</h1>
      {resourceData.map((resource, index) => (
        <Card1
          key={resource.id}
          title={resource.title}
          description={resource.description}
          types={resource.types}
          symptoms={resource.symptoms}
          treatment={resource.treatment}
          imageUrl={resource.imageUrl}
          isEven={index % 2 === 0} // Add this to alternate cards
        />
      ))}
    </div>
  );
};

export default Resources;
