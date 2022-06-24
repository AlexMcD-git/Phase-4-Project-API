# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_06_22_155950) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "chemical_experiments", force: :cascade do |t|
    t.bigint "chemical_id", null: false
    t.bigint "experiment_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["chemical_id"], name: "index_chemical_experiments_on_chemical_id"
    t.index ["experiment_id"], name: "index_chemical_experiments_on_experiment_id"
  end

  create_table "chemicals", force: :cascade do |t|
    t.string "name"
    t.integer "amount_in_grams"
    t.string "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "experiments", force: :cascade do |t|
    t.string "description"
    t.boolean "is_complete"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "user_id", null: false
    t.index ["user_id"], name: "index_experiments_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "chemical_experiments", "chemicals"
  add_foreign_key "chemical_experiments", "experiments"
  add_foreign_key "experiments", "users"
end
