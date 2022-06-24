class CreateChemicals < ActiveRecord::Migration[7.0]
  def change
    create_table :chemicals do |t|
      t.string :name
      t.integer :amount_in_grams
      t.string :location

      t.timestamps
    end
  end
end
