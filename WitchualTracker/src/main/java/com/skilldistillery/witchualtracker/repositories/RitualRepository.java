package com.skilldistillery.witchualtracker.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.witchualtracker.entities.Ritual;

public interface RitualRepository extends JpaRepository<Ritual, Integer> {

}
