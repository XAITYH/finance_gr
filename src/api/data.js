import { sql } from "@vercel/postgres";

export default async function fetchData() {  
  try {  
      const data_questions = await sql`SELECT * FROM quiz.questions`;  
      const data_answers = await sql`SELECT * FROM quiz.answers`;  
      console.log(data_questions.rows);
      return {  
          questions: data_questions.rows,  
          answers: data_answers.rows,  
      };
  } catch (error) {  
      console.error("Ошибка при получении данных:", error);  
      return { questions: [], answers: [] };
  }  
}