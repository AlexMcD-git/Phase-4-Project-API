# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Seeding data"
user=User.create(username: "Alex", password: "123")
chemical_1= Chemical.create(name: "Acetic Acid, 8%", amount_in_grams: 750, location: "Lab A, Acids Cabinet")
chemical_2= Chemical.create(name: "Sodium Bicarbonate", amount_in_grams: 500, location: "Chemical Storage, Shelf 2")
experiment_1=Experiment.create(description:"Baking soda and vinegar volcano", is_complete: false, user: user)
chemical_experiment_1=ChemicalExperiment.create(experiment:experiment_1, chemical: chemical_1)
chemical_experiment_2=ChemicalExperiment.create(experiment:experiment_1, chemical: chemical_2)

chemical_3= Chemical.create(name: "Triolein", amount_in_grams: 300, location: "Lab A, Flamables Cabinet")
chemical_4= Chemical.create(name: "Cyclohexane", amount_in_grams: 500, location: "Lab A, Flamables Cabinet")
chemical_5= Chemical.create(name: "Paladium on Carbon, 10%", amount_in_grams: 5, location: "Chemical Storage, Shelf 1")
experiment_2=Experiment.create(description:"Hydrogenation of Olive Oil", is_complete: false, user: user)
chemical_experiment_3=ChemicalExperiment.create(experiment:experiment_2, chemical: chemical_3)
chemical_experiment_4=ChemicalExperiment.create(experiment:experiment_2, chemical: chemical_4)
chemical_experiment_5=ChemicalExperiment.create(experiment:experiment_2, chemical: chemical_5)


puts "Done seeding."